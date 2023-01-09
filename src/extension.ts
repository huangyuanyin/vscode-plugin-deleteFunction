import * as vscode from 'vscode'
import { getFunctionNode } from './main'

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('vscode-extension.deleteFunction', () => {
    vscode.window.showInformationMessage('函数删除成功!')

    // vscode 中 应该如何删除一个字符
    const editor = vscode.window.activeTextEditor
    if (!editor) return
    // 算法 业务逻辑
    const code = editor.document.getText() // 拿到光标所在的内容
    const index = editor.document.offsetAt(editor.selection.active) // 拿到光标所在索引

    const functionNode = getFunctionNode(code, index)

    if (!functionNode) return

    // vscode UI
    editor?.edit((editBuilder) => {
      editBuilder.delete(
        new vscode.Range(new vscode.Position(functionNode.start.line - 1, functionNode.start.column), new vscode.Position(functionNode.end.line - 1, functionNode.end.column))
      )
    })
  })
}
