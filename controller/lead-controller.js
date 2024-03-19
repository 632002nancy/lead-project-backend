const customer = require("../model/lead-model");
const axios = require("axios");
//---------------------------performing create option and checking if the data already present or not
const addDetails = async (req, res, next) => {
  console.log(req);
  const {
    fName,
    lName,
    mobile,
    address,
    pinCode,
    state,
    city,
    product,
    date,
    time,
  } = req.body;
  let data;
  data = new customer({
    fName,
    lName,
    mobile,
    address,
    pinCode,
    state,
    city,
    product,
    date,
    time,
  });
  data = await data.save();
//   console.log(data);
  return res.status(200).json({ data });
};

// reading the data from the database
const showDetails = async (req, res, next) => {
  let data;
  data = await customer.find();
  res.status(200).json({ data });
};

//getting city state from pincode
const givecity = async (req, res) => {
  const pincode = req.params.id;
//   console.log(pincode);

  try {
    const response = await axios.get(
      `http://www.postalpincode.in/api/pincode/${pincode}`
    );
    const postOffice = response.data.PostOffice;
    // console.log(postOffice);
    if (postOffice && postOffice.length > 0 && postOffice[0].Name) {
      const city = postOffice[0].District;
      const State = postOffice[0].State;

      return res.json({ data: { city: city, state: State } });
    } else {
      return res
        .status(404)
        .json({ msg: "City/State not found for the provided pin code",status:false });
    }
  } catch (error) {
    console.error("Error fetching City/State:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.addDetails = addDetails;
exports.showDetails = showDetails;
exports.givecity = givecity;
