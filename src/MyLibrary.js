import React, { Component } from 'react'



class MyLibrary extends Component{
    constructor(){
        super();

        this.state={
            books:[],
            title:'',
            author:''
        }
    }

    onTitleChange=(e)=>{
        this.setState({
            title:e.target.value
        })
    }

    onAuthorChange=(e)=>{
        this.setState({
            author:e.target.value
        })
    }

    addBook=()=>{
        this.setState({
            books:[
                ...this.state.books,
                {
                    id:this.state.books.length+1,
                    title:this.state.title,
                    author:this.state.author
                }
            ],
            title:'',
            author:''
        })
    }

    removeBook=(book)=>{
        this.setState({
            books:this.state.books.filter((currentBook)=>{
                return currentBook.id!=book.id
            })
        })
    }

    render(){
        return(
            <div>
                <h1>My Library</h1>
                <input type="text" value={this.state.title} placeholder="Title" onChange={this.onTitleChange} name="title"/>
                <input type="text" value={this.state.author} placeholder="Author" onChange={this.onAuthorChange} name="author"/>
                <button onClick={this.addBook}>Add Book</button>
                <br/>
                <center>
                    <table>
                        <tbody>
                        <tr>
                            <td>Title</td>
                            <td>Author</td>
                            <td></td>
                        </tr>
                        {
                            this.state.books.map((book)=>{
                                return <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td><button onClick={()=>{
                                        this.removeBook(book);
                                    }}>Remove</button></td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </center>
            </div>
        )
    }
}

export default MyLibrary;