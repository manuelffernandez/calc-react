import { useState } from 'react';
import { evaluate } from 'mathjs';

let keyLogger = [];

export const useCalculator = () => {
  const [display, setDisplay] = useState('');

  const pushToKeyLogger = key => {
    keyLogger = [...keyLogger, { keyChar: key.char, keyType: key.type }];
  };

  const getKeyCharsFromKeyLogger = () => {
    let charList = '';
    keyLogger.forEach(key => {
      charList += key.keyChar;
    });
    return charList;
  };

  const showKeyLogger = () => {
    setDisplay(getKeyCharsFromKeyLogger());
  };

  const funcList = {
    number: key => {
      pushToKeyLogger(key);
    },

    comma: key => {
      const isLastNumberWithComma = () => {
        for (let i = keyLogger.length - 1; i >= 0; i--) {
          const keyType = keyLogger[i].keyType;
          if (keyType === 'operator') return false;
          if (keyType === 'comma') return true;
        }
      };

      if (!isLastNumberWithComma()) {
        pushToKeyLogger(key);
      }
    },

    operator: key => {
      const lastKeyLog = keyLogger[keyLogger.length - 1];

      if (lastKeyLog && key.type === lastKeyLog.keyType) {
        keyLogger[keyLogger.length - 1] = {
          keyChar: key.char,
          keyType: key.type,
        };
      } else if (lastKeyLog) {
        pushToKeyLogger(key);
      }
    },

    equal: () => {
      const result = evaluate(getKeyCharsFromKeyLogger());

      if (result) {
        const newResult = result.toString();

        keyLogger = [];
        for (let i = 0; i < newResult.length; i++) {
          const char = newResult[i];
          const type = char === '.' ? 'comma' : 'number';
          const key = {
            char,
            type,
          };

          pushToKeyLogger(key);
        }
      }
    },

    clear: () => {
      keyLogger = [];
    },
  };

  const inputHandler = key => {
    funcList[key.type](key);
    showKeyLogger();
  };

  return [display, inputHandler];
};
