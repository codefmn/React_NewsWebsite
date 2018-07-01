import React from 'react';
import {Card,Form,Input,Button} from 'antd';

const base_url = "http://newsapi.gugujiankong.com/Handler.ashx?action=";

class CommentsBlock extends React.Component{
    constructor(){
        super();
        this.state = {
            comments:[]
        }
    }

    componentDidMount(){
        var fetchOptions = {
            method: 'GET'
        }
        fetch(base_url+"getcomments&uniquekey="+this.props.ukey,fetchOptions)
        .then(response=>response.json())
        .then(json=>{
            this.setState({comments:json});
        })
    }

    handleSubmit(e){
        e.preventDefault();
        var formdata = this.props.form.getFieldsValue();
        var fetchOptions = {
            method: 'GET'
        }
        fetch(base_url+"comment&userid="+localStorage.userID+"&uniquekey="+
        this.props.ukey+"&commnet="+formdata.newComment, fetchOptions)
        .then(response=>response.json())
        .then(json=>{
            this.componentDidMount();
        })
    }

    render(){
        let {getFieldProps} = this.props.form;
        const commentsList = this.state.comments.length ?
        this.state.comments.map((value,index)=>
        <Card key={index} title={value.UserName}>
            {value.Comments}
        </Card>)
        :"no comments yet";
        return(
            <div>
                {commentsList}
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Item>
                        <Input type="textarea" placeholder="new comment" {...getFieldProps('newComment')}/>
                    </Form.Item>
                    <Button type="primay" htmlType="submit">Submit</Button>
                </Form>
            </div>
        );
    }

}

export default CommentsBlock = Form.create({})(CommentsBlock);