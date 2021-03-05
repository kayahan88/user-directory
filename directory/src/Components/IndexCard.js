import React from 'react'

const IndexCard = (props) => {
//Take props in as a parameter.
//Destructure data and index from props. You can use just the variables data and index if you destructure it off of props.
    const { data, index } = props

        return (
            <div className='card'>

                <div className='card-number'>
                    <h1>{data[index].id}/25</h1>
                </div>

                <div className='name'>
                    <h1>{data[index].name.first} {data[index].name.last}</h1>
                </div>


                <div className='bio'>
                    
                    <div className='title-line'>
                        <p className='title'>From: </p>
                        <p>{data[index].city}, {data[index].country}</p>
                    </div>

                    <div className='title-line'>
                        <p className='title'>Job Title: </p>
                        <p>{data[index].title}</p>
                    </div>

                    <div className='title-line'>
                        <p className='title'>Employer: </p>
                        <p>{data[index].employer}</p>
                    </div>
                        

                        
                    
                </div>

                <div className='favorites'>
                    <p className='title'>Favorite Movies: </p>
                    <section className='moviesContainer'>
                        <p className='movie-list'>1. {data[index].favoriteMovies[0]}</p>
                        <p className='movie-list'>2. {data[index].favoriteMovies[1]}</p>
                        <p className='movie-list'>3. {data[index].favoriteMovies[2]}</p>
                    </section>
                </div>

            </div>


        )
}
export default IndexCard
    //INDEX NUMBER
    //In a header tag, print the value of the current index card (or the id), which will be from the data object at data[index] + '/25' (you'll need to use dot notation to access the id property)

    //NAME
    //In a header tag, print the value of the person's name from the data object at data[index] (you'll need dot notation after this to access the name property).
    
    //FROM
    //In a <p> tag, print 'From: ' + the value of where the person is from (their city and country) from the data object at data[index] (you'll need dot notation after this to access the from property.)

    //JOB TITLE
    //In a <p> tag, display the person's job title in the same way.

    //EMPLOYER
    //In a <p> tag, display the person's employer in the same way.

    //DIV?
    //Create that space in there with a div? Or maybe we put this whole part up to this point in a container called Bio?

    //FAVORITE MOVIES
    //In a <p> tag, print 'Favorite Movies:'

    //MOVIE CONTAINER
    //Make a section with className 'moviesContainer'
        //In a <p> tag, print movie number one from the data object at data[index] using dot notation to access the favoriteMovies array, and then bracket notation to access the movie

        //Do the same thing for movies 2 and 3




