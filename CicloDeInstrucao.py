from pprint import pprint
class MemoriaPrincipal:

    def __init__(self):
        # MemoriaPrincipal de 256 bytes (256 endereços) com celulas de 8 bits
        self.memorySize = 2**8
        self.HEAD = 0
        self.RESULT_HEAD = 0
        self.STACK_POINTER = 0
        #MemoriaPrincipal Principal
        self.memoriaPrincipal = [None] * self.memorySize
    
    
    def insertBits(self, bits):
        BitsParaAlocar = bits.split(' ')
        lastIndex =  self.STACK_POINTER
        bitAdrress = lastIndex
        
        for byte in BitsParaAlocar :
            self.memoriaPrincipal[lastIndex] = byte
            lastIndex += 1
        
        self.STACK_POINTER = lastIndex
        return bitAdrress
    
    def printMemory(self):
        print(self.memoriaPrincipal)
        print(self.HEAD)

class CPU:

    def __init__(self, memoria):
        self.PC = 0
        self.RI = []
        self.mem = memoria
        self.instruction_count = 0
        
    def addInstruction(self, instruction, R1 = '000000000', R2 = '00000000'):
        
        if instruction == 'ADD':
            self.mem.insertBits(f'00000010 {R1:08b} {R2:08b}')
        if instruction == 'SUB':
            self.mem.insertBits(f'00000001 {R1:08b} {R2:08b}')
        if instruction == 'JUMP':
            self.mem.insertBits(f'00000100 {R1:08b} {R2:08b}')
        
        self.instruction_count += 1

        if instruction == 'EXIT':
            self.mem.insertBits(f'11111111')
            self.mem.RESULT_HEAD = self.mem.STACK_POINTER    

    def ULA(self, binary_instruction : list):
        if binary_instruction[0] == '00000010': #ADD
            result = int(binary_instruction[1], 2) + int(binary_instruction[2], 2)
            self.mem.memoriaPrincipal[self.mem.RESULT_HEAD ] = result
            self.mem.RESULT_HEAD += 1
        if binary_instruction == 'SUB': #SUB
            pass
        if binary_instruction == 'JUMP': #JUMP
            pass
    
    def executeInstructions(s):

        while s.mem.memoriaPrincipal[s.PC]:
            
            if s.mem.memoriaPrincipal[s.PC] == '11111111':
                break
            
            if len(s.RI) < 3:
                s.RI.append(s.mem.memoriaPrincipal[s.PC])
                s.PC += 1 #increment Program Counter
            else:
                s.ULA(s.RI) #EXECUTE INSTRUCTION
                s.RI = []   #CLEAN RI    
                s.RI.append(s.mem.memoriaPrincipal[s.PC]) #append next instruction
                s.PC += 1 #increment Program Counter
            
        if len(s.RI) == 3:
                s.ULA(s.RI) #EXECUTE INSTRUCTION

        # for index, value in enumerate(self.mem.memoriaPrincipal) :
        #     if index > 3
        #         self.PC = 0
            

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
        self.CPU.addInstruction('ADD', 12, 10)
        self.CPU.addInstruction('EXIT')
        #Adicionando instrucao 2
        #adress = self.mem.insertBits(f'00000000 00000000 00000000 00000002')
        
        #print('Endereço do word', adress)
        self.mem.printMemory()

    def runProgram(self):
        self.CPU.executeInstructions()
        self.mem.printMemory()

# Hardware da Maquina
computador = Computador()

# CICLO DE PROCESSAMENTO (SIMULANDO UMA ITERACAO DO CLOCK)
computador.instruction()

computador.runProgram()




