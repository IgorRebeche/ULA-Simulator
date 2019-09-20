//Ver Speedup funcionamento e no pipeline 
//miguel.figuereido@gmail.com


//Main

const ULA_App = (action) => {
  //Initiating Registers
  console.log('Bem Vindo PC 16 BITS PC');
  var acc, flag;
  var operando  = InitiateRegisters(action)[0];
  var r1 = InitiateRegisters(action)[1];
  var r2  = InitiateRegisters(action)[2];
  //sum(r1, r2);
  acc = operation(operando, r1, r2, acc);
  print('r1 ' + r1);
  print('r2 ' + r2);
  print('operando ' + operando);
  print('acc ' + acc);
  
  return ({
    operationResult: '',
    flag: ''
  })

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
  if(result > 255)
    flag = flagTypes.OVERFLOW;
  if(result == 0)
    flag = flagTypes.ZERO;
  if(result < 0)
    flag = flagTypes.NEGATIVE;
}
const operation = (operator, r1, r2) => {
  switch(operator){
    case op.SUM:
      //console.log('sum ' + acc);
      return sum(r1, r2)
    case op.SUB:
      console.log('sub');
      break;
    case op.SHIFT_LEFT:
      console.log('shift_left');
      break;
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
  return sum.toString(2);
}

const sub = (r1, r2, accI) => {
  var x = parseInt(var1, 2);
  var y = parseInt(var2, 2);
  var sum = x - y;
  acc = sum.toString(2);
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
  OVERFLOW: '0001',
  NEGATIVE: '0010',
  ZERO: '0100'

}

ULA_App("0001 1011 1001 1111");
