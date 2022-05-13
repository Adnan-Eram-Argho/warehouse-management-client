import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div>
                <h1>Difference between javascript and nodejs?</h1>
                <p>javascript is programmong language which runs on web browser on the other hand Node.js is an interpreter.javascript can be run on any default browser running environment.node js helps us excude non blocking operation.Node js runs on v8 engine</p>

            </div>
            <div>
                <h1>When should you use nodejs and when should you use mongodb</h1>
                <p>node js is a js engine where as mongodb is a  database.node.js can be used to run application but most commonly it is used to build servers.mongodb is used to save data or query. If you want to write some kind of stand alone program  the node.js is enough but if you want to store data then you need mongodb</p>
            </div>
            <div>
                <h1> Differences between sql and nosql databases.</h1>
                <p>sql databases are relational and no sql databases are non relational.sql databases are table based while no sql data bases are not table based.the support for sql data bases are way better than most of the no sql databases.in case of no sql data bases you still have to rely on community</p>
            </div>

            <a href="https://stackoverflow.com/questions/72232381/typeerror-cant-assign-to-property-caninitemulator-on-emailgmail-com-not">stackoverflow question link</a>
        </div>
    );
};

export default Blogs;