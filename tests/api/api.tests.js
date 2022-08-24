import axios from "axios";
import { testUser } from '../../test-data/users';


const api = 'https://petstore.swagger.io/v2/user/'

fixture.meta({ module: 'users' })('user api tests')
  .before(async ctx => {
    const createTestData = axios.post(api, testUser)
      .then(() => {
        console.log('test data created')
        ctx.user = testUser;
      })
      .catch(err => console.log('error in post, failed to create user' + err));

    await createTestData;
  })
  .after(async ctx => {
    const url = api.concat(ctx.user.username);
    const deleteTestData = axios.delete(url)
      .then(() => console.log('test data deleted'))
      .catch(err => console.log('error in delete, failed to delete user' + err));

    await deleteTestData;
  })


// GET
test('get returns user with status 200', async t => {

  const user = t.fixtureCtx.user;
  const url = api.concat(user.username);
  const response = await t.request({ url })
  await t.expect(response.status).eql(200);
  await t.expect(response.body.username).eql(user.username)
  await t.expect(response.body.firstName).eql(user.firstName)
  await t.expect(response.body.lastName).eql(user.lastName)
  await t.expect(response.body.email).eql(user.email)
  await t.expect(response.body.password).eql(user.password)
  await t.expect(response.body.userStatus).eql(user.userStatus)
});

test('get returns status 404', async t => {
  const url = api.concat('xxxxxxxxxxxx');
  const response = await t.request({ url })
  await t.expect(response.status).eql(404);
  await t.expect(response.body.message).eql("User not found");
})

// POST
test('post returns status 200 and user is created', async t => {
  const newTestUser = { ...t.fixtureCtx.user, username: 'newUserName' };
  t.fixtureCtx.newTestUser = newTestUser;

  const response = await t.request.post({ url: api, body: newTestUser })

  await t.expect(response.status).eql(200);
})
  .after(async t => {
    const url = api.concat(t.fixtureCtx.newTestUser.username);
    const response = await t.request.delete(url)
    await t.expect(response.status).eql(200);
  })

test('post returns status 500 for invalid model', async t => {
  const invalidModelTestUser = { ...t.fixtureCtx.user, userStatus: 'xxxxxxxxx' };
  t.fixtureCtx.invalidModelTestUser = invalidModelTestUser;

  const response = await t.request.post({ url: api, body: invalidModelTestUser })

  await t.expect(response.status).eql(500);
});

//PUT
test('put returns status 200 and user is updated', async t => {
  const updatedTestUser = { ...t.fixtureCtx.user, phone: "1111111111" };

  const url = api.concat(t.fixtureCtx.user.username);
  const response = await t.request.put({ url, body: updatedTestUser })

  await t.expect(response.status).eql(200);
});

// DELETE
test('delete returns status 404 for invalid user', async t => {
  const url = api.concat('xxxxxxxxx');
  const response = await t.request.delete({ url })
  await t.expect(response.status).eql(404);
});




