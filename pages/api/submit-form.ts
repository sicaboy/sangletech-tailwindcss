const { Client } = require("@notionhq/client");
const { Webhook } = require("discord-webhook-node");

//TODO: Sang - Figure out how to integrate process.env for Notion and Discord
const hook = new Webhook(
  "https://discord.com/api/webhooks/895213192714813460/3sPSVZTXeP-OmVvfWFfeqn97TUm9gRrIHVqEu0hpolesN3eGa0mbYV90vpzyIGWd9WRF"
);

// NOTION_API_KEY = secret_eXSRJe3C3J2CAgE4AjG25HzplCiXVIIxFwO2AsQVysM
// NOTION_DATABASE_ID = 50b684e017fe44bc8ba769bd6143c6d7
const notion = new Client({
  auth: "secret_eXSRJe3C3J2CAgE4AjG25HzplCiXVIIxFwO2AsQVysM",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { name, email, phone, app, course } = JSON.parse(req.body);

    // console.log(`body: ${JSON.stringify(JSON.parse(req.body))}`);

    //Create new App Object to send to Notion
    const newAppObj = app.map((i) => {
      return { name: i.value };
    });
    //Create a new Course Object to send to Notion
    const newCourseObj = course.map((i) => {
      return { name: i.value };
    });

    await notion.pages.create({
      parent: {
        database_id: "50b684e017fe44bc8ba769bd6143c6d7",
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Phone: {
          phone_number: phone,
        },
        App: {
          multi_select: newAppObj,
        },
        Course: {
          multi_select: newCourseObj,
        },
      },
    });
    console.log(
      `Sucessfully send the form with body : ${JSON.stringify(
        JSON.parse(req.body)
      )}`
    );

    hook.send(
      `Someone signed up for a form. Details: ${JSON.stringify(
        JSON.parse(req.body)
      )}`
    );

    res.status(201).json({ msg: "Success" });
    // res.writeHead(201, {
    //   Location: "/form-success",
    // });
    // res.end();
  } catch (error) {
    res.status(500).json({ msg: "There was an error" });
    console.log(
      `Failed to send the form with body: ${JSON.stringify(
        JSON.parse(req.body)
      )}`
    );
  }
}
