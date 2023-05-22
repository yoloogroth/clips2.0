import React from "react";
import '../styles/clip.css'
import KafkaService from "../services/kafka.service";

function ReactionsComponent() {
  function saveLike(e, status) {
  
    let data = {
      id: 0,
      status: status
    };
 
    console.log(JSON.stringify(data));
 
    KafkaService.reaction("i-love-adsoftsito");
    e.preventDefault();
}

  return (
    <div class="reactions">
      <div class="reaction reaction-like"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
      <div class="reaction reaction-love"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
      <div class="reaction reaction-haha"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
      <div class="reaction reaction-wow"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
      <div class="reaction reaction-sad"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
      <div class="reaction reaction-angry"onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                      
                    }
                } 
></div>
    </div>
  );
}

export default ReactionsComponent;
