//Ver Speedup funcionamento e no pipeline 
//miguel.figuereido@gmail.com


//Main

const ULA_App = (action) => {
  //Initiating Registers
  console.log('Bem Vindo PC 16 BITS PC');
  var acc, flag;
  var operando  = action[0];
  var r1 = action[1];
  var r2  = action[2];
  //sum(r1, r2);
  acc = operation(operando, r1, r2, acc);
  print('r1 ' + r1);
  print('r2 ' + r2);
  print('operando ' + operando);
  print('acc ' + acc);
  
  return acc;

}

// Methods Auxs 
const InitiateRegisters = (binary) => {
   var codes = getBinary(binary);
   
   return codes;
   //operando = codes[0];
   //r1 = codes[1];
   //r2 = codes[2];
   

}
const getBinary = (binary) => {
  var variables = [];
  return variables = binary.split(' ');
}
const verify = (result) => {
  if(result > 225)
    return flagTypes.OVERFLOW;
  if(result == 0)
    return flagTypes.ZERO;
  if(result < 0)
    return  flagTypes.NEGATIVE;

    return 0;
}
const operation = (operator, r1, r2) => {
  var result;
  switch(operator){
    case op.SUM:
        result = sum(r1, r2);
      return ({
        flag: result.flag,
        r1: r1,
        r2: r2,
        output: result.output,
        operando: '+'
      })
    case op.SUB:
      console.log('sub');
      result = sub(r1, r2);
      return ({
        flag: result.flag,
        r1: r1,
        r2: r2,
        output: result.output,
        operando: '-'
      });
      case op.MULT:
          console.log('mult');
          result = mult(r1, r2);
          return ({
            flag: result.flag,
            r1: r1,
            r2: r2,
            output: result.output,
            operando: '*'
          });
      case op.DIV:
          console.log('div');
          result = div(r1, r2);
          return ({
            flag: result.flag,
            r1: r1,
            r2: r2,
            output: result.output,
            operando: '/'
          });

    case op.PRINT:
      console.log('print');
      break;

      default:
        break;
  }
}

const sum = (r1, r2) => {
  var x = parseInt(r1, 2);
  var y = parseInt(r2, 2);
  var sum = x + y;
  return {output: sum.toString(2), flag: verify(sum)};
}

const sub = (r1, r2) => {
  var x = parseInt(r1, 2);
  var y = parseInt(r2, 2);
  var sub = x - y;
  return {output: sub.toString(2), flag: verify(sub)};
}

const mult = (r1, r2, accI) => {
  var x = parseInt(r1, 2);
  var y = parseInt(r2, 2);
  var mult = x * y;
  return {output: mult.toString(2), flag: verify(mult)};
}

const div = (r1, r2) => {
  var x = parseInt(r1, 2);
  var y = parseInt(r2, 2);
  var div = x / y;
  return {output: div.toString(2), flag: verify(div)};
}

const shiftl = (r1, r2) => {
  var x = parseInt(r1, 2);
  var y = parseInt(r2, 2);
  var shiftl = x - y;
  return  shiftl.toString(2);
}
const print = ( information ) => {
  console.log( information );
}

const op = {
  SUM: '0001',
  SUB: '0010',
  MULT: '0011',
  DIV: '0111',
  SHIFT_LEFT: '0100',
  PRINT: '1000'
}
const flagTypes = {
  OVERFLOW: {
    code: '0001',
    label: 'OVERFLOW'
  },
  NEGATIVE: {
    code: '0010',
    label: 'NEGATIVE'
  },
  ZERO: {
    code: '0100',
    label: 'ZERO'
  }

}

//ULA_App("0001 1011 1001 1111");

export default ULA_App;