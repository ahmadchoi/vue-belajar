import app from '../firebase.config'

import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, where} from 'firebase/firestore'

const db = getFirestore(app)
const todoCollect = collection(db, 'todos')

class TodoService {
    getAllTodo() {
        return getDocs(todoCollect);
    }

    createTodoList(todo) {
        return addDoc(todoCollect, todo);
    }

    hapusDoc(id) {
        return deleteDoc( doc(db, 'todos', id) );
    }

    ubahDoc(todo) {
        const tempId = todo.id;
        delete todo.id;
        // delete todo.index;
        return updateDoc( doc(db, 'todos', tempId), todo );
    }

    getCompleteTodo() {
        return getDocs( query(todoCollect, where('isCheck', '==', true)));
    }

    getImportantTodo() {
        return getDocs( query(todoCollect, where('isImportant', '==', true)));
    }


}

export default new TodoService()