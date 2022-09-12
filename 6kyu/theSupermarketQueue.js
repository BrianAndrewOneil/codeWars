//Given: customers: an array of positive integers representing the queue, each integer represents a customer, and its value is the amount of time they require to check out.
//n: a positive integer, the number of checkout tills. Calculate the total time required for all the customers to check out.

function queueTime(customers, n) {
    let queues = []
    for(let i=0;i<n;i++){
      queues[i]=0
    }
    customers.forEach(num=>{
      queues=queues.sort((a,b)=>a-b)
      queues[0]+=num
    })
    return queues.sort((a,b)=>a-b).pop()
  }