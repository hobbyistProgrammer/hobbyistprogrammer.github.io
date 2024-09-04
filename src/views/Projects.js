import React from 'react';
import './Project.css';
import calc_view from '../assets/calculator_view.png';
import calc_compute from '../assets/calculator_compute.png';
import macro_view from '../assets/macrosapp.png';
import macro_db from '../assets/mysql_db.png';

const Project = () => {
  return (
    <>
        <h2>Experience</h2>
        <p>More academic projects can be found on my GitHub. Showcasing my main academic experiences working on various projects:</p>
        <div className="project-item">
            <h3>BookSwap</h3>
            <p>A mobile application that allows users to create book listings, view book listings, and request books.</p>
            <ul>
                <li>Scans ISBN numbers on books and retrieves related data from a library API.</li>
                <li>Uses a PostgreSQL database for book listing information.</li>
                <li>My contribution: frontend UI, barcode camera scan, and library API retrieval.</li>
                </ul>
        </div>
      
        <div className="project-item">
            <h3>SneakIn</h3>
            <p>A web application that allows business owners to check invoices, reports, and market prices for items.</p>
            <ul>
                <li>Uses Typescript XML and Amazon RDS AWS for storage.</li>
                <li>My contribution: AWS database connection and frontend UI updates.</li>
            </ul>
            <a href="https://drive.google.com/file/d/1Zgev6vMJY9d7Q87S_AorEurInFTZBwfp/view?usp=drive_link" className="download-button">SneakIn App Download</a>
        </div>

        <div className="project-item">
            <h3>Healthcare Monitoring App</h3>
            <p>A Web Application that allowed nurses to view/add patient vital information for all patients, and patients to play games, or add vital information</p>
            <ul>
                <li>Developed using JavaScript with the React framework, ensuring a responsive user interface.</li>
                <li>Built a GraphQL API using Express to interact with the local MongoDB database, handling data retrieval and storage efficiently.</li>
                <li>Applied micro-frontends and micro-services architecture to ensure application is modular and scalable.</li>
                <li>Included a functional memory game developed with JavaScript to encourage patient engagement and interactive learning.</li>
                <li>Integrated a deep-learning API for symptom checking</li>
                <li>My contributions: Led the development of the frontend UI, established database connections, and implemented querying logic for data interactions.</li>  
            </ul>
            <a href="/projects/HealthcareApp.zip" download="HealthcareApp.zip" className="download-button">Healthcare Monitoring App Download</a>
        </div>

        <div className="project-item">
            <h3>Simple Calculator</h3>
            <p>A JavaFX application that allows users to perform simple math calculations.</p>
            <ul>
                <li>Created using Java and JavaFX, demonstrating UX principles and event-driven operations.</li>
                <li>Includes features for basic arithmetic and more complex calculations.</li>
            </ul>
            <div className="project-images">
                <img src={calc_view} alt="Calculator View"/>
                <img src={calc_compute} alt="Calculator Compute"/>
            </div>
            <a href="/projects/Calculator.zip" download="Calculator.zip" className="download-button">Calculator App Download</a>
        </div>

        <div className="project-item">
            <h3>Macros Calender Tracking App</h3>
            <p>
                A JavaFX application that allows users to search a comprehensive grocery/product/recipe API (Spoonacular) 
                to retrieve and store nutritional information for each day.
            </p>
            <p><a href="https://spoonacular.com/food-api" target="_blank">* URL to Spoonacular *</a></p>
            <ul>
                <li>Developed using Java and JavaFX, highlighting UX principles and event-driven design.</li>
                <li>This application was created by utilizing Spoonacular's API to access detailed product macros, 
                    with MySQL handling local database storage and retrieval.</li>
                <li>As illustrated below:
                    <ol>
                        <li>
                            This app allows users to add products obtained through a search from the Spoonacular API.
                            Which can then be stored for the following date. 
                        </li>
                        <li>
                            After choosing which product the user would like to add to that date (double-click item), it will be stored into the MySQL database
                            and retrieved to be displayed alongside all the other products selected.
                        </li>
                    </ol>
                </li>
            </ul>
            <div className="project-images">
                <img src={macro_view} alt="Macro App View"/>
                <img src={macro_db} alt="App DB View"/>
            </div>
            <a href="/projects/MacrosApplication.zip" download="MacrosApplication.zip" className="download-button">Macros Tracker App Download</a>
        </div>
    </>
  );
};

export default Project;