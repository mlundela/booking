# left-pad

Left-pad as a service - An AWS Lambda function template

## Deploy it with apex

Install [apex](http://apex.run/#installation)

    curl https://raw.githubusercontent.com/apex/apex/master/install.sh | sh
    
Create apex project

    apex init

Create left-pad lambda function 

    npm run build

Deploy to AWS 

    apex deloy
    
Test the lambda function 

    apex invoke left-pad < test/left-pad.json
    
Show logs 
    
    apex logs -f
