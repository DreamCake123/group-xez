"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log("Hello World from Group XEZ!");
    // let results : vscode.Extension<any>[] = [];
    var extensionsList = vscode.extensions.all; // Extension<any> []
    var extensionsIdList = [];
    for (let i = 0; i < extensionsList.length; i++) {
        extensionsIdList.push(extensionsList[i].id.slice(7));
    }
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand("group-xez.helloWorld", () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window
            .showQuickPick(extensionsIdList, { canPickMany: true })
            .then((x) => {
            if (x === undefined) {
                return;
            }
            var resultInString = "";
            var y = [];
            for (let i = 0; i < x.length; i++) {
                var a = vscode.extensions.getExtension("vscode." + x[i]);
                if (a !== undefined) {
                    y.push(a);
                }
            }
            var result = extensionsList.filter((ext) => !y.find((ele) => ele === ext));
            for (let i = 0; i < result.length; i++) {
                resultInString += result[i].id + " }|{ ";
            }
            vscode.window.showInformationMessage(resultInString);
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map