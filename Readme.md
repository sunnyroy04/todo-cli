# Todo CLI

A simple Command Line Interface (CLI) for managing your to-do list using Node.js.

## Features
- Add new todos  
- Show all todos  
- Delete the last todo  
- Edit an existing todo  
- Mark todos as completed  
- View project details  

## Installation
1. Clone this repository:  
   ```sh
   git clone https://github.com/sunnyroy04/todo-cli.git
   ```  
2. Navigate to the project directory:  
   ```sh
   cd todo-cli
   ```  
3. Install dependencies:  
   ```sh
   npm install
   ```  

## Usage
Run the following command to use the CLI:  
```sh
node todocli.js
```

### Commands
- **Add a new todo:**  
  ```sh
  node todocli.js add "Your todo here"
  ```
- **Show all todos:**  
  ```sh
  node todocli.js show
  ```
- **Delete the last todo:**  
  ```sh
  node todocli.js delete
  ```
- **Edit an existing todo:**  
  ```sh
  node todocli.js edit "Old todo" "New todo"
  ```
- **Mark a todo as completed:**  
  ```sh
  node todocli.js complete "Exact todo name"
  ```
- **View project details:**  
  ```sh
  node todocli.js Detail
  ```

## License
This project is open-source and available under the [MIT License](LICENSE).
