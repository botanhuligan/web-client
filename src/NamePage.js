import React from 'react';
import './App.css';

import {Button, Form, FormLabel, FormText,} from 'react-bootstrap'

function NamePage() {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Введите свое ФИО</Form.Label>
                <Form.Control className="input" type="email" placeholder="ФИО"/>
                <Form.Text className="text-muted">
                    Ваше имя будет использоваться как первый фактор аутентификации.
                </Form.Text>
            </Form.Group>

            <Button className="button" variant="primary" type="submit">
                Отправить
            </Button>
        </Form>
    );
}

export default NamePage;
