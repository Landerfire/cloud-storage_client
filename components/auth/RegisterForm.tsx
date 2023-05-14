import { RegisterFormDTO } from '@/api/dto/auth.dto';
import { Button, Form, Input, notification } from 'antd';
import { setCookie } from 'nookies';
import styles from './Auth.module.scss';
import axios, { AxiosError } from 'axios';

import * as Api from '@/api';

type Props = {};

const RegisterForm = (props: Props) => {
  const onSubmit = async (values: RegisterFormDTO) => {
    try {
      const { token } = await Api.auth.register(values);

      notification.success({
        message: 'Успешно!',
        description: 'Переходим в админ-панель...',
        duration: 2,
      });

      setCookie(null, '_token', token, {
        path: '/',
      });

      location.href = '/dashboard';
    } catch (err: unknown | Error | AxiosError) {
      let errorMessage;
      console.warn('RegisterForm', err);

      if (axios.isAxiosError(err)) {
        errorMessage = err.response?.data.message;
      }
      notification.error({
        message: 'Ошибка!',
        description: errorMessage || 'Упс! Что-то пошло не так...',
        duration: 3,
      });
    }
  };

  return (
    <div className={styles.formBlock}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="E-Mail"
          name="email"
          rules={[
            {
              required: true,
              message: 'Укажите почту',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Полное имя"
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Укажите полное имя',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Укажите пароль',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Регистрация
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
