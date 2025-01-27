import * as assert from "assert";
import {describe, it} from 'mocha';
import { isTimeZoneValid } from "./index.js";
  

describe("დროის სარტყელი", () => {
    it('მაგალითი', () => {
        ['+', '-'].forEach(sign => {
            for (let i = 0; i < 24; i++) {
                for (let j = 0; j < 60; j++) {
                    const hourText = i < 10 ? '0' + i : i;
                    const minuteText = j < 10 ? '0' + j : j;
                    const zonetext = sign + hourText + ':' + minuteText;
                    const shouldBeTrue = ['+00:00', '+01:00', '+02:00', '+03:00', '+04:00', '+05:00', '+06:00', '+07:00', '+08:00', '+09:00', '+10:00', '+11:00', '+12:00', '+13:00', '+14:00', '-00:00',
                        '-01:00', '-02:00', '-03:00', '-04:00', '-05:00', '-06:00', '-07:00', '-08:00', '-09:00', '-10:00', '-11:00', '-12:00',
                        '-09:30', '-03:30', '-02:30', '+03:30', '+04:30', '+05:30', '+06:30', '+09:30', '+10:30', '+08:45', '+05:45', '+12:45', '+13:45'].includes(zonetext);

                    assert.strictEqual(isTimeZoneValid(zonetext), shouldBeTrue);
                    
                }
            }
        })
    })
});
