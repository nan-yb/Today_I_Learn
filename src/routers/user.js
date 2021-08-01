const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req, res) => {
  res.send('Root - GET');
});

const USERS = {
  15: {
    nickname: 'foo',
  },
  16: {
    nickname: 'bar',
  },
};

router.get('/', (req, res) => {
  // register user
  res.render('index', {
    message: 'Hello , pug!!!',
  });
});

router.param('id', async (req, res, next, value) => {
  try {
    // @ts-ignore
    const user = USERS[value];

    if (!user) {
      const err = new Error('User not found.');
      // @ts-ignore
      err.statusCode = 404;
      throw err;
    }

    // @ts-ignore
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
});

router.get('/:id', (req, res) => {
  const resMimeType = req.accepts('json', 'html');
  if (resMimeType === 'json') {
    // @ts-ignore
    res.send(req.user);
  } else if (resMimeType === 'html') {
    res.render('user-profile', {
      nickname: req.user.nickname,
    });
  }
});

router.post('/:id/nickname', (req, res) => {
  // req.body :  {"nickname" : "bar"}
  // @ts-ignore
  const { user } = req;
  const { nickname } = req.body;

  user.nickname = nickname;
  res.send(`${nickname}`);
});

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
