export const downloadMnemonicCSV = (mnemonic: string) => {
  const csvContent = `data:text/csv;charset=utf-8,${mnemonic}`
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', 'mnemonic.csv')
  document.body.appendChild(link)

  link.click()
}
