export const sendEmail = async (name, email, title, text) => {
  try {
    const sendData = {
      name,
      email,
      title,
      text
    };
    const response = await fetch("/contact", {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendData)
    });
    if (response.ok) {
      const data = await response.json();
      return 200;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (error) {
    throw error;
  }
};
// //create fetch function to git all my infos for home page //
export const allMyInfosPost = async () => {
  try {
    const response = await fetch("/sendInfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const allMySkillsPost = async () => {
  try {
    const response = await fetch("/getSkills", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const allMyProjectsPost = async () => {
  try {
    const response = await fetch("/getProjects", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const allMyEducationPost = async () => {
  try {
    const response = await fetch("/getEducationPost", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const allMyExperiencePost = async () => {
  try {
    const response = await fetch("/getExperiencePost", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const footerInfoPost = async () => {
  try {
    const response = await fetch("/getFooterInfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
