import axios from "axios";

export default async function adminePage(params) {
 
   try {
    const response = await axios.get('http://localhost:3000/api/order');
    const orders = response.data; // No need for 'await' here
    
    const valuesArray = Object.values(orders); 
    

    // const orderData = Object(orders);

    console.log("----------- response:", response); // Logs the entire response object
    console.log("----------- orders:", orders);   // Logs the actual data from the response
    console.log("----------- valuesArray:", valuesArray);   // Logs the actual data from the response


    // Check if orders is an array
    if (Array.isArray(valuesArray)) {
      console.log("Orders is an array and can be mapped:", valuesArray);
    } else {
      console.error("Expected orders to be an array but got:", typeof orders, orders);
    }

    // return orders; // Return the orders array for further use
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    // return []; // Return an empty array in case of error to avoid breaking the map function
  }



// const {orderData} = orders;
// console.log("---------- // G ",orderData);
    // const data = [
    //     { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    //     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    //     { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
    //     { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
    //   ];
    

      return (
        <div className="flex items-center justify-center h-[90vh] bg-gray-100">
          <div className="w-full max-w-7xl p-4 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">User Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left text-gray-600">ID</th>
                    <th className="px-4 py-2 text-left text-gray-600">customer</th>
                    <th className="px-4 py-2 text-left text-gray-600">Email</th>
                    <th className="px-4 py-2 text-left text-gray-600">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {valuesArray.map((order)=>(
                    <tr key={order.id} className="border-b">
                      <td className="px-4 py-2 text-gray-700">{order.id}</td>
                      <td className="px-4 py-2 text-gray-700">
                      <strong>
                      {order.customer}
                      </strong>
                      </td>
                      <td className="px-4 py-2 text-gray-700">{order.Email}</td>
                      <td className="px-4 py-2 text-gray-700">{order.Role}</td>
                    </tr>
                ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}


