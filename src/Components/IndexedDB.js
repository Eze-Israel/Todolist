import axios from "axios";
import PunchDB from 'pouchdb';
import {CreateStore}  from 'react-redux'
import React, {useState, useEffect} from "react";
import { image1 } from "./images";

// import idb library in your database
import {openDB} from 'idb';


// Create the Database using openDB named myDB with version number1
const db = await openDB('myDB', 1);

