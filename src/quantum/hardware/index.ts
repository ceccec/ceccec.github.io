// ☰ Qián · Heaven — quantum hardware integrations (REST API)
// IBM Quantum, AWS Braket, Azure Quantum

export { ibmQuantumSubmitJob, ibmQuantumGetJob, ibmQuantumTest, type IbmQuantumJob, type IbmQuantumBackend } from './ibm.ts'
export { awsBraketSubmitTask, awsBraketGetTask, awsBraketTest, type AwsBraketJob, type AwsBraketDevice } from './aws.ts'
export { azureQuantumSubmitJob, azureQuantumGetJob, azureQuantumTest, type AzureQuantumJob, type AzureQuantumProvider, type AzureQuantumTarget } from './azure.ts'

export async function quantumHardwareCapabilities(
  ibmToken?: string,
  awsKeys?: { access: string; secret: string },
  azureToken?: string
) {
  return {
    ibm: { available: !!ibmToken, provider: 'IBM Quantum', backends: ['simulator_statevector', 'ibmq_qasm_simulator', 'ibmq_jakarta', 'ibmq_manila'] },
    aws: { available: !!awsKeys, provider: 'AWS Braket', devices: ['sv1', 'tn1', 'dm1', 'local'] },
    azure: { available: !!azureToken, provider: 'Azure Quantum', providers: ['ionq', 'rigetti', 'quantinuum', 'microsoft-qci'] },
  }
}
