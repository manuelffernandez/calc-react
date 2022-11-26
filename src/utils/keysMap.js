const typesMap = {
  number: 'number',
  comma: 'comma',
  operator: 'operator',
  equal: 'equal',
  clear: 'clear',
};

const keypadLayoutMap = {
  right: 'right',
  left: 'left',
};

const keysMap = [
  {
    id: '7',
    char: '7',
    layoutSide: keypadLayoutMap.left,
    type: typesMap.number,
  },
  {
    id: '8',
    char: '8',
    layoutSide: keypadLayoutMap.left,
    type: typesMap.number,
  },
  {
    id: '9',
    char: '9',
    layoutSide: keypadLayoutMap.left,
    type: typesMap.number,
  },
  {
    id: '4',
    char: '4',
    layoutSide: keypadLayoutMap.left,
    type: typesMap.number,
  },
  {
    id: '5',
    char: '5',
    layoutSide: keypadLayoutMap.left,
    type: typesMap.number,
  },
  {
    id: '6',
    char: '6',
    layoutSide: keypadLayoutMap.left,
    type: typesMap.number,
  },
  {
    id: '1',
    char: '1',
    layoutSide: keypadLayoutMap.left,
    type: typesMap.number,
  },
  {
    id: '2',
    char: '2',
    layoutSide: keypadLayoutMap.left,
    type: typesMap.number,
  },
  {
    id: '3',
    char: '3',
    layoutSide: keypadLayoutMap.left,
    type: typesMap.number,
  },
  {
    id: '0',
    char: '0',
    layoutSide: keypadLayoutMap.left,
    type: typesMap.number,
  },
  {
    id: '10',
    char: '.',
    layoutSide: keypadLayoutMap.left,
    type: typesMap.comma,
  },

  {
    id: '11',
    char: 'C',
    layoutSide: keypadLayoutMap.right,
    type: typesMap.clear,
  },
  {
    id: '12',
    char: '/',
    layoutSide: keypadLayoutMap.right,
    type: typesMap.operator,
  },
  {
    id: '13',
    char: '*',
    layoutSide: keypadLayoutMap.right,
    type: typesMap.operator,
  },
  {
    id: '14',
    char: '-',
    layoutSide: keypadLayoutMap.right,
    type: typesMap.operator,
  },
  {
    id: '15',
    char: '+',
    layoutSide: keypadLayoutMap.right,
    type: typesMap.operator,
  },
  {
    id: '16',
    char: '=',
    layoutSide: keypadLayoutMap.right,
    type: typesMap.equal,
  },
];

export default keysMap;
