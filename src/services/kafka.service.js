
class KafkaService {
   //url = 'https://your-kafka-express-service-kafka-adsoftsito.cloud.okteto.net/';
   url = 'https://kafka-express-service-yoloogroth.cloud.okteto.net/';
  
   reaction = async (uId, oId, rId) => {
    await fetch(this.url + '/reaction?userId=' + uId+'&objectId='+oId +'&reactionId='+rId, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  comment = async (uId, oId, comment) => {
    await fetch(this.url + '/comments?userId=' + uId+'&objectId='+oId +'&comment='+comment, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
}

const kafkaService = new KafkaService();
export default kafkaService;
