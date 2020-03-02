import React, {Component} from 'react'

import Booklist from '../library/Booklist'
import Wishlist from '../library/Wishlist'

class Library extends Component{
    constructor(){
        super();

        let books=[
            {
                id:1,
                title:'JS Fundamentals',
                author:'John'
            },
            {
                id:2,
                title:'React Pro',
                author:'Azat'
            }, 
            {
                id:3,
                title:'Node in Action',
                author:'Dan'
            }
        ]

        this.state={
            books:books,
            wishlist:[]
        }
    }

    addToWishlist=(book)=>{
        console.log(JSON.stringify(book))
        this.setState({
            wishlist:[
                ...this.state.wishlist,
                book
            ]
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Library</h1>
                <Booklist books={this.state.books} addToWishlist={this.addToWishlist}/>
                <Wishlist books={this.state.wishlist}/>
            </React.Fragment>
        )
    }
}

export default Library;