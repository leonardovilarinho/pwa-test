import { Selector } from 'testcafe'

fixture`Hello world`
  .page`http://localhost:8080`

test('My first test', async t => {
  await t
    .expect( Selector('#msg').innerText ).eql('Welcome to Your Vue.js PWA')
});
