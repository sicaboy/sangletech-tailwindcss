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
    const { name,
      email,
      phone,
      socialUrl,
      applyPosition,
      resumeUrl,
      introVideoUrl,
      portfolioUrl,
      questions
    } = JSON.parse(req.body);


    // const formatQuestions = questions.map(item => {
    //   return {
    //     object: 'block',
    //     type: 'heading_3',
    //     heading_3: {
    //       text: [
    //         {
    //           type: ' text',
    //           text: {
    //             content: item.question,

    //           }
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     object: 'block',
    //     type: 'paragraph',
    //     paragraph: {
    //       text: [
    //         {
    //           type: 'text',
    //           text: {
    //             content: item.answer,

    //           }
    //         }
    //       ]
    //     }
    //   }
    // })
    // console.log(JSON.stringify(formatQuestions[0]))

    // console.log(`body: ${JSON.stringify(JSON.parse(req.body))}`);

    await notion.pages.create({
      parent: {
        database_id: "a4babba63fe34201b4b6be37d77d68d0",
      },
      properties: {
        fullName: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        email: {
          email: email,
        },
        phoneNumber: {
          phone_number: phone,
        },
        socialUrl: {
          url: socialUrl,
        },
        resumeUrl: {
          url: resumeUrl,
        },
        introVideoUrl: {
          url: introVideoUrl,
        },
        portfolioUrl: {
          url: portfolioUrl,
        },
        applyPosition: {
          select: {
            name: applyPosition,
          },
        },
        questions: {
          rich_text: [
            {
              text: {
                content: JSON.stringify(questions)
              }
            }
          ]
        }
      },
      //  children: formatQuestions,

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
