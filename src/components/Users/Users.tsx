import React from 'react';
import {selectUsers} from '../../redux/users/selector';
import {followUsers, unfollowUsers} from '../../redux/users/slice';
import {fetchUsers} from "../../redux/users/asyncAction";
import {connect} from "react-redux";
import {UsersType} from "../../redux/users/type";


type UsersPropsType = {
   users: UsersType[]
   unfollowUsers: (id: string) => void
   followUsers: (id: string) => void
}

class Users extends React.Component<UsersPropsType> {
   componentDidMount() {
      // @ts-ignore
      this.props.fetchUsers()
   }

   unfollowButtonHandler = (id: string) => {
      this.props.unfollowUsers(id);
   }

   followButtonHandler = (id: string) => {
      this.props.followUsers(id);
   }

   render() {
      return (
          <div>
             {this.props.users.map(u => {
                return <div key={u.id} className="flex justify-between items-center mb-2">
                   <div className="flex items-center">
                      <img className="w-34 h-14" src={u.avatar} alt="avatar"/>
                      <div className="text-black flex flex-col content-center	">
                         <div className="font-semibold">
                            <span>{u.lastName} </span>
                            <span>{u.firstName} </span>

                         </div>
                         <div>
                            <span>{u.position}</span>
                         </div>
                         <div>
                            <span>{u.location.city}, </span>
                            <span>{u.location.country}</span>
                         </div>
                      </div>
                   </div>
                   <div className="pr-5">
                      <div
                          className='w-24 flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-800"'>{u.followed
                          ? <button onClick={() => this.unfollowButtonHandler(u.id)}>Unfollow</button>
                          : <button onClick={() => this.followButtonHandler(u.id)}>Follow</button>
                      }</div>
                   </div>
                </div>
             })}
          </div>
      );
   }
}

const mapStateToProps = (state: any) => ({
   users: selectUsers(state),
});

const mapDispatchToProps = {
   fetchUsers,
   followUsers,
   unfollowUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)