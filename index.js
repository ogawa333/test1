function doGet() {
  // let html = HtmlService.createTemplateFromFile('index')
  // return html.evaluate()

  const user = Session.getActiveUser()
  let html   = HtmlService.createTemplateFromFile('index')
  html.email = user.getEmail()

  const SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート2')
  const numColumn = SHEET.getLastColumn() // 最後列の列番号を取得
  const numRow    = SHEET.getLastRow() -1 // 最後行の行番号を取得
  const dataRange = SHEET.getRange(2, 1, numRow, numColumn)
  const data = dataRange.getValues()
  
  html.data = data
  html.flag = 0
  console.log(data)
  console.log(user.getEmail())
  return html.evaluate()

}
