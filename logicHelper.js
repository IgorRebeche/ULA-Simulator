
//Main

const ULA_App = (action) => {
  //Initiating Registers
  console.log('Bem Vindo PC 16 BITS PC');
  var acc, flag;
  var operando  = InitiateRegisters("0001 1011 1001 1111")[0];
  var r1 = InitiateRegisters(action)[1];
  var r2  = InitiateRegisters(action)[2];
  //sum(r1, r2);
  operation(operando, r1, r2, acc);
  print('r1 ' + r1);
  print('r2 ' + r2);
  print('operando ' + operando);
  
  return ({
    operationResult: '',
    flag: ''
  })

}

// Methods Auxs 
const InitiateRegisters = (binary) => {
   var codes = getBinary(binary);
   return codes;
   flag = codes[0];
   r1 = codes[1];
   r2 = codes[2];

}
const getBinary = (binary) => {
  var variables = [];
  return variables = binary.split(' ');
}
const operation = (operator, r1, r2) => {
  switch(operator){
    case op.SUM:
      sum(r1, r2)
      console.log('sum ' + acc);
      break;
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

const sum = () => {
  var x = parseInt(r1, 2);
  var y = parseInt(r2, 2);
  var sum = x + y;
  acc = sum.toString(2);
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
  SHIFT_LEFT: '0100',
  PRINT: '1000'
}


ULA_App("0001 1011 1001 1111");
