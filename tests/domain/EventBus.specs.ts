import { EventBus, message } from './../../src/domain/EventBus';
import { expect } from 'chai';
import 'mocha';

describe('EventBus', () => {

    describe('Subscribe', ()=>{
        let eb: EventBus;

        @message
        class SomeEvent{}

        @message
        class AnotherEvent{}

        beforeEach(()=>{
            eb = new EventBus();
        })

        it('not be null', () => {
            expect(eb).not.null;
        });

        it('returns a subscription', () => {
            let s = eb.Subscribe(SomeEvent, ()=>{});
            expect(s).not.null;
        });

        it('receives a message when subscribed', () => {
            var receivedCount = 0;
            let s = eb.Subscribe(SomeEvent, ()=>{ receivedCount++});
            eb.Publlish(new SomeEvent());
            expect(receivedCount).equal(1);
        });

        it('stops receiving messages when unsubscribed', () => {
            //Arrange
            var receivedCount = 0;
            let s = eb.Subscribe(SomeEvent, ()=>{ receivedCount++});

            //Act
            eb.Publlish(new SomeEvent());
            s.Dispose();
            eb.Publlish(new SomeEvent());

            //Assert
            expect(receivedCount).equal(1);
        });

        it('receives messages while subscribed', () => {
            //Arrange
            var receivedCount = 0;
            let s = eb.Subscribe(SomeEvent, ()=>{ receivedCount++});

            //Act
            eb.Publlish(new SomeEvent());
            eb.Publlish(new SomeEvent());

            //Assert
            expect(receivedCount).equal(2);
        });

        it('allows multiple subscription channels', () => {
            //Arrange
            var receivedCount = 0;
            var anotherCount = 0;

            let sr = eb.Subscribe(SomeEvent, ()=>{ receivedCount++});
            let sa = eb.Subscribe(AnotherEvent, ()=>{ anotherCount++});

            //Act
            eb.Publlish(new SomeEvent());
            eb.Publlish(new AnotherEvent());

            //Assert
            expect(receivedCount).equal(1);
            expect(anotherCount ).equal(1);
        });
    });
});