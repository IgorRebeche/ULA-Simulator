
class MemoriaPrincipal:

    def __init__(self):
        
        # MemoriaPrincipal de 256 bytes (256 endereços) com celulas de 8 bits
        self.memorySize = 2**8
        self.HEAD = 0
        #MemoriaPrincipal Principal
        self.memoriaPrincipal = [None] * self.memorySize
    
    
    def insertBits(self, bits):
        BitsParaAlocar = bits.split(' ')
        lastIndex = self.HEAD
        bitAdrress = lastIndex
        
        for byte in BitsParaAlocar :
            self.memoriaPrincipal[lastIndex] = byte
            lastIndex += 1
        
        self.HEAD = lastIndex
        return bitAdrress
    
    def printMemory(self):
        print(self.memoriaPrincipal)
        print(self.HEAD)

class CPU:

    def __init__(self, memoria):
        self.PC = 0
        self.RI = 0
        self.mem = memoria
        self.instrAdresses = []
    def addInstruction(self, instruction, R1, R2):
        self.ULA(instruction, R1, R2)

    def ULA(self, instruction, R1, R2):
        if instruction == 'ADD':
            self.instrAdresses.append( self.mem.insertBits(f'00000010 {R1:08b} {R2:08b}') )
        if instruction == 'SUB':
            self.instrAdresses.append( self.mem.insertBits(f'00000001 {R1:08b} {R2:08b}') )
        if instruction == 'JUMP':
            self.instrAdresses.append( self.mem.insertBits(f'00000100 {R1:08b} {R2:08b}') )
    def executeInstructions(self):

        for i in self.instrAdresses:
            

class Computador():

    def __init__(self):
        self.mem = MemoriaPrincipal()
        self.CPU = CPU(self.mem)
        self.printComputerInformation()

    def printComputerInformation(self):
        memRamSize = self.mem.memorySize
        print('Inicializando computador...')
        print(f'MemoriaPrincipal de {memRamSize} Bytes')

    def instruction(self):
        
        #Adicionando instrucao 1
        self.CPU.addInstruction('ADD', 10, 10)

        #Adicionando instrucao 2
        #adress = self.mem.insertBits(f'00000000 00000000 00000000 00000002')
        
        #print('Endereço do word', adress)
        self.mem.printMemory()


# Hardware da Maquina
computador = Computador()

# CICLO DE PROCESSAMENTO (SIMULANDO UMA ITERACAO DO CLOCK)
computador.instruction()





