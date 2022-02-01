interface Todo {
    id: number;
    todo: string;
    done: boolean;
}
interface Action{
    type:string,
    payload:Todo
}


const initialState:Todo[] = [{
    id:1,
    todo:'Comprar pan',
    done:false
}]



const todoReducer=(state:Todo[]=initialState,action?:Action)=>{

    if(action?.type==='agregar'){
        return [...state,action.payload]
    }

    return state
}

let todos=todoReducer();

const newTodo:Todo={
    id:2,
    todo:'Comprar leche',
    done:false
}

const agregarTodoAction:Action={
    type:'agregar',
    payload:newTodo
}
todos=todoReducer(todos,agregarTodoAction);

console.log(todos);