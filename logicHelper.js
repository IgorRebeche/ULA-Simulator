//Ver Speedup funcionamento e no pipeline 
//miguel.figuereido@gmail.com


//Main
var r1, r2, acc, flag, operando;

const Main = () => {
  //Initiating Registers
  console.log('Bem Vindo PC 16 BITS PC');
  InitiateULA("0001 1001 1111");
  //sum(r1, r2);
  operation(operando, r1, r2);
  print('r1 ' + r1);
  print('r2 ' + r2);
  print('operando ' + operando);
  print('Teste', acc);    

}

// Methods Auxs 
const InitiateULA = (binary) => {
   var codes = getBinary(binary);
   
   operando = codes[0];
   r1 = codes[1];
   r2 = codes[2];

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

const sum = (var1, var2, accI) => {
  var x = parseInt(var1, 2);
  var y = parseInt(var2, 2);
  var sum = x + y;
  return sum.toString(2);
}

const sub = (var1, var2, accI) => {
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

const operation = (operator, r1, r2) => {
  switch(operator){
    case op.SUM:
      //sum()  
      acc = sum(r1, r2);
      console.log('sum ', acc);
      break;
    case op.SUB:
      sub(r1, r2);
      console.log('sub ', acc);
      break;
    case op.SHIFT_LEFT:

      console.log('shift_left');
      break;
    case op.PRINT:
      // Flag ( 0000 ) Valor ( 0000 0000 )
      console.log('print');
      break;
      default:
        break;
  }
}
Main();
