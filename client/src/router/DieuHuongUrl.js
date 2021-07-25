import { directive } from '@babel/types';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from '../component/home/Home';
import WhatchingVideo from '../component/whatching/WhatchingVideo'
export default function DieuHuongUrl() {
    
        return (
            <div>  
                <Switch>
                    <Route path="/hello">
                            <WhatchingVideo />
                        </Route>
                        
                    <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
            </div>
           
        )
    }

