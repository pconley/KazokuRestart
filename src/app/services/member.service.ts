import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

// import { Event  } from '../models/event';
import { Member } from '../models/member';
// import { trace  } from '../utilities/trace';

@Injectable()
export class MemberService {

    public members: Observable<Member[]>;

    constructor(
        private db: AngularFireDatabase
    ) {

    	const listRef = db.list('members');

        console.log("listRef...",listRef);

        // this.members = new Observable<any[]>();
        // this.members = db
        //     .list('/members', {query: { limitToFirst: 500, orderByKey: true }})
        //     .map( arr => arr.map( v => new Member(v)) )
        //     .first()
            //.do( this.extract_events )

        //trace.log("members...",this.members)
    }

    // extract_events( members: Member[] ){
    //     var that = this;
    //     that.events = [];
    //     trace.log("extract events. member count = "+members.length);
    //     members.forEach( member => {
    //         if( member.events ){ 
    //             let [birth] = member.events.filter( event => event.kind == 'birt' );
    //             if( birth ) that.events.push( birth )
    //         }
    //     });
    // }

    get_member( id ){
        //trace.log("fms#get_member: id = "+id);
        return this.db
            .object('/members/'+id)
            //.filter( obj => !obj.key )
            //.do( obj => trace.log("fms#get_member. result...",obj) )
            //.map( obj => new Member(obj) )
            //.do( obj => trace.log("fms#get_member. convert...",obj) )

    }
}
