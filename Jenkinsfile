pipeline {
    agent any
 
    tools {
        nodejs "Node 16.13.2"
        }
 
    stages {
 
        stage('Cypress Parallel Test Suites') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente2_1"
                    }
                    steps {
                        git url: 'https://github.com/luisafcg/form.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 234dc415-7780-44ee-a14a-276c8b32d788 --parallel'
                    
                    }
                }
 
                stage('Slave 2') {
                    agent {
                        label "Agente2_2"
                    }
                    steps {
                         git url: 'https://github.com/luisafcg/form.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 234dc415-7780-44ee-a14a-276c8b32d788 --parallel'
                    
                    }
                }
 
                stage('Slave 3') {
                    agent {
                        label "Agente2_3"
                    }
                    steps {
                       git url: 'https://github.com/luisafcg/form.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 234dc415-7780-44ee-a14a-276c8b32d788 --parallel'
                    
                    }
                }
 
                stage('Slave 4') {
                    agent {
                        label "Agent2_4"
                    }
                    steps {
                        git url: 'https://github.com/luisafcg/form.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 234dc415-7780-44ee-a14a-276c8b32d788 --parallel'
                    
                    }
                }
 
               
 
                
   
                  
            }
 
             
        }
 
    }
            
}