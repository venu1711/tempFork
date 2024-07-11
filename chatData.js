const intialQuestions=[
    "what does the application do?",
    "regression testing",
    "rest api",
    "performance testing",
    "maintenance",
    'pot automation',
    'scenario maintenance'
]

const initialAnswers = {
    "what does the application do?" : "helps to buy clothes",
    "regression testing" : "a type of testing in the software development cycle that runs after every change to ensure that the change introduces no unintended breaks",
    "performance testing" : "the process of evaluating of the quality or capability of a product.",
    "rest api": "A REST API (also called a RESTful API or RESTful web API) is an application programming interface (API) that conforms to the design principles of the representational state transfer (REST) architectural style.",
    "maintenance": "the process of preserving a condition or situation or the state of being preserved.",
    "pot automation":"pot automation refers to the procedures and protocols used to ensure that automated systems designed for managing plants in pots function correctly and reliably",
    "scenario maintenance":"A maintenance scenario has scenario lines based on which planned activities can be generated"
}


const answersAndButtons = [
    {
        "text":"what does the application do?",
        "what does the application do?" : "helps to buy clothes",
        "buttons":["app1","app2","app3"]
    },{
        "text":"regression testing",
        "regression testing": "a type of testing in the software development cycle that runs after every change to ensure that the change introduces no unintended breaks",
        "buttons":["reg1","regression testing2","rtest3"]
    },{
        "text":"performance testing",
        "performance testing" : "the process of evaluating of the quality or capability of a product.",
        "buttons":["performance testing1","pt2","perTest3","PTest-4"]
    },{
        "text":"pot automation",
        "pot automation":"pot automation refers to the procedures and protocols used to ensure that automated systems designed for managing plants in pots function correctly and reliably",
        "buttons":["pot1","potauto2","potAutomation3"]
    },{
        "text":"rest api",
        "rest api": "A REST API (also called a RESTful API or RESTful web API) is an application programming interface (API) that conforms to the design principles of the representational state transfer (REST) architectural style.",
        "buttons":["rapi1","restapi2"]   
    },{
        "text":"maintenance",
        "maintenance": "the process of preserving a condition or situation or the state of being preserved.",
        "buttons":["maintain1","m2","maintenance3"]
    },{
        "text":"scenario maintenance",
        "scenario maintenance":"A maintenance scenario has scenario lines based on which planned activities can be generated",
        "buttons":["scenarioMaintain1", "sm2","sceMaintain3","sm4","sm5"]
    }
]

const greetings = ['hi',"hii","hiii","hello","helloo","hey","heyy","heyyy"]

const headingOfChatBot = "TestAutoBot"

const username = "User"
export {
    intialQuestions,
    initialAnswers,
    greetings,
    answersAndButtons,
    headingOfChatBot,
    username
}