var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
		it('should generate a correct message object', () => {
				let from = 'Joe',
						text = 'this is a message';
				let message = generateMessage(from, text);
				expect(message.from).toBe(from);
				expect(message.text).toBe(text);
		})
})