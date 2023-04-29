import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from "./layout/main-layout";
import {Progress} from "reactstrap";

function App() {

  return (
    <div className="App">
     <MainLayout>
         <div className="border border-1 rounded p-2 my-2 ">
             <div className="text-start">
                 My goal is to make a significant contribution to the design and development of cloud-native architectures, service-based applications, and platforms, including microservices. My passion lies in enhancing and creating development processes while implementing process improvements. I am enthusiastic about leveraging Java, Spring, Hibernate, and React JS to develop and extend application features.
             </div>
         </div>
         <div className="border border-1 rounded p-2 my-2">
         <h1>
             Skills
         </h1>
             Java
             <Progress
                 className="my-2"
                 multi
             >
                 <Progress
                     bar
                     value="15"
                 >
                     Core
                 </Progress>
                 <Progress
                     bar
                     color="success"
                     value="30"
                 >
                     Web
                 </Progress>
                 <Progress
                     bar
                     color="info"
                     value="25"
                 >
                     Network
                 </Progress>
                 <Progress
                     bar
                     color="warning"
                     value="20"
                 >
                     20%
                 </Progress>
                 <Progress
                     bar
                     color="danger"
                     value="5"
                 >
                     Parallel
                 </Progress>
                 <Progress
                     bar
                     color="gray"
                     value="5"
                 >
                     ?
                 </Progress>
             </Progress>

             Spring
         </div>
         <div className="border border-1 rounded p-2 my-2"> div3</div>
         <div className="border border-1 rounded p-2 my-2"> div4</div>
     </MainLayout>

    </div>
  );
}

export default App;
