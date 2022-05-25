pipeline {
    agent any

    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git branch: 'main', url: 'https://github.com/luisafcg/form.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 234dc415-7780-44ee-a14a-276c8b32d788  --parallel'
                    
                    }
                }

                   stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git branch: 'main', url: 'https://github.com/luisafcg/form.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7f3ad08e-6c6e-442f-bcbd-cb3269ac5a9c  --parallel'
                    
                    }
                }

                  
            }

             
        }

    }
            
}