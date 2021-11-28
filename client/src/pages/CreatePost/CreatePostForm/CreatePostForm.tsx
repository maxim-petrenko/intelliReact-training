import React from 'react';
import { CreatePostFormProps } from './types';
import { Button, Form, Input } from 'antd';
import styles from './styles.module.scss'

export const CreatePostForm = ({ onFinishFN }: CreatePostFormProps) => (
    <Form
        name="newPost"
        labelCol={{span: 3}}
        wrapperCol={{span: 'auto'}}
        autoComplete="off"
        onFinish={onFinishFN}
        validateTrigger='onFinish'
        size='large'
        className={styles.form}
    >
        <Form.Item
            label="Author"
            name="author"
            rules={[{required: true, message: 'Please specify author name and surname!'}]}
        >
            <Input/>
        </Form.Item>

        <Form.Item
            label="Title"
            name="title"
            rules={[{required: true, min: 5, message: 'Please specify post title (min. length - 5)!'}]}
        >
            <Input placeholder="Main title, will be displayed in bold"/>
        </Form.Item>

        <Form.Item
            label="Subtitle"
            name="subtitle"
            rules={[{min: 5, message: 'Minimal length - 5'}]}

        >
            <Input placeholder="Optional subtitle, will be displayed in normal weight under the main title"/>
        </Form.Item>

        <Form.Item
            label="Post text"
            name="text"
            rules={[{required: true, min: 40, message: 'Please write some text!'}]}
        >
            <Input.TextArea/>
        </Form.Item>
<div className={styles.buttonContainer}>
    <Form.Item wrapperCol={{offset: 8, span: 16}}>
        <Button type='primary' htmlType='submit'>
            Create post
        </Button>
    </Form.Item>

    <Form.Item wrapperCol={{offset: 8, span: 16}}>
        <Button type='text' htmlType='reset'>
            Reset fields
        </Button>
    </Form.Item>
</div>

    </Form>
);
