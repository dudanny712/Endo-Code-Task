import React from 'react'
import GitInfo from 'react-git-info/macro';


const PACKAGE_VERSION = require("../../../package.json").version;
const PACKAGE_NAME = require("../../../package.json").name;
const gitInfo = GitInfo();

const Version = () => {
  return (
    <div>
        <h1>Name: {PACKAGE_NAME}</h1>
       <h1>Version: {PACKAGE_VERSION}</h1>
       <h1> Git Hash: {gitInfo.commit.hash}</h1>
       
      
    </div>
    
  )
}

export default Version
