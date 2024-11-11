{
  "Comment": "An example of using Bedrock to chain prompts and their responses together.",
  "StartAt": "Pergunta ideias de combinação",
  "States": {
    "Pergunta ideias de combinação": {
      "Type": "Task",
      "Resource": "arn:aws:states:::bedrock:invokeModel",
      "Parameters": {
        "ModelId": "arn:aws:bedrock:us-east-2::foundation-model/amazon.titan-embed-text-v2:0",
        "Body": {
          "inputText": "Estou programando um jantar romântico, nesse jantar irei pedir um macarrão, me dê 3 itens que combina com uma experiência gastronômica.",
          "textGenerationConfig": {
            "temperature": 0,
            "topP": 1,
            "maxTokenCount": 2000
          }
        },
        "ContentType": "application/json",
        "Accept": "*/*"
      },
      "Next": "Add first result to conversation history",
      "ResultPath": "$.result_one",
      "ResultSelector": {
        "result_one.$": "$.Body.content[0].text"
      }
    },
    "Add first result to conversation history": {
      "Type": "Pass",
      "Next": "Pergunta ideia de bebida",
      "Parameters": {
        "convo_one.$": "States.Format('{}\n{}', $.prompt_one, $.result_one.result_one)"
      },
      "ResultPath": "$.convo_one"
    },
    "Pergunta ideia de bebida": {
      "Type": "Task",
      "Resource": "arn:aws:states:::bedrock:invokeModel",
      "Parameters": {
        "ModelId": "arn:aws:bedrock:us-east-2::foundation-model/amazon.titan-embed-text-v2:0",
        "Body": {
          "inputText": "Liste duas bebidas que acompanhem um jantar romântico.",
          "textGenerationConfig": {
            "temperature": 0,
            "topP": 1,
            "maxTokenCount": 2000
          }
        },
        "ContentType": "application/json",
        "Accept": "*/*"
      },
      "Next": "Add second result to conversation history",
      "ResultSelector": {
        "result_two.$": "$.Body.content[0].text"
      },
      "ResultPath": "$.result_two"
    },
    "Add second result to conversation history": {
      "Type": "Pass",
      "Next": "Pergunta lugar ideal",
      "Parameters": {
        "convo_two.$": "States.Format('{}\n{}\n{}', $.convo_one.convo_one, $.prompt_two, $.result_two.result_two)"
      },
      "ResultPath": "$.convo_two"
    },
    "Pergunta lugar ideal": {
      "Type": "Task",
      "Resource": "arn:aws:states:::bedrock:invokeModel",
      "Parameters": {
        "ModelId": "arn:aws:bedrock:us-east-2::foundation-model/amazon.titan-embed-text-v2:0",
        "Body": {
          "inputText": "Liste um lugar perfeito para jantar romântico em Paris.",
          "textGenerationConfig": {
            "temperature": 0,
            "topP": 1,
            "maxTokenCount": 2000
          }
        },
        "ContentType": "application/json",
        "Accept": "*/*"
      },
      "End": true,
      "ResultSelector": {
        "result_three.$": "$.Body.cintent[0].text"
      }
    }
  }
}