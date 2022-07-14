import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import {
  ModalContainer,
  Content,
  Header,
  FormContainer,
  Toolbar,
} from './ClaimModal.styles';
import TextField from '@mui/material/TextField';
import Button from '../../../Shared/Button/Button';
import { v4 as uuidv4 } from 'uuid';

import { scrollToViewButton } from '../../../../utils/ScrollToView/scrollToViewButton';
import { claimVoucherRequest } from './ClaimModal.services';
import { Mixpanel } from '../../../../mixpanel';

const ClaimModal = ({
  modalState,
  modalClose,
  familyMembers,
  formData,
  formHandler,
  planSelected,
  packageSelected,
  pricing,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
  });

  const validate = () => {
    let error = false;
    const errors = {};

    if (!formData.name) {
      error = true;
      errors.name = 'Enter your name';
    }

    if (!formData.email) {
      error = true;
      errors.email = 'Enter your email';
    }

    setFormErrors(errors);

    return error;
  };

  const submitClaim = () => {
    const db = getDatabase();
    const isError = validate();
    if (!isError) {
      const payload = {
        ...formData,
        familyMembers,
        planSelected,
        packageSelected,
        ...pricing,
      };

      set(ref(db, 'claims/' + uuidv4()), {
        ...formData,
        familyMembers,
        planSelected,
        packageSelected,
        ...pricing,
      }).then(async () => {
        setSubmitted(true);

        const payload = {
          email: formData.email,
          name: formData.name,
          postcode: formData.postcode,
        };

        claimVoucherRequest(payload);

        Mixpanel.track('Claimed Voucher', {
          ...formData,
          familyMembers,
          planSelected,
          packageSelected,
          ...pricing,
        });
      });
    }
  };

  return (
    <Modal open={modalState} onClose={modalClose}>
      <ModalContainer>
        <Content>
          <Toolbar>
            {!submitted ? <h3></h3> : <h3></h3>}
            <h3 onClick={() => modalClose()}>X</h3>
          </Toolbar>
          {!submitted && (
            <>
              <Header>
                <h3>FREE MEALS PROMOTION ENDED</h3>
              </Header>
              <p>
                We will update our website soon to start accepting and manage
                orders. Come back again next week, thanks for checking us out 😊
              </p>
              {/* <FormContainer>
                <TextField
                  label='Name'
                  name='name'
                  value={formData.name}
                  error={formErrors.name ? true : false}
                  helperText={formErrors.name && formErrors.name}
                  onChange={(e) => formHandler(e)}
                  type='text'
                  placeholder='Tell us your name'
                />
                <TextField
                  label='Email'
                  type='email'
                  name='email'
                  value={formData.email}
                  error={formErrors.email ? true : false}
                  helperText={formErrors.email && formErrors.email}
                  onChange={(e) => formHandler(e)}
                  placeholder='We will send your voucher here'
                />
                <TextField
                  label='Postcode'
                  name='postcode'
                  value={formData.postcode}
                  onChange={(e) => formHandler(e)}
                  type='number'
                  placeholder='So we know where to send it to'
                />
              </FormContainer>
              <Button color='green' width='100%' onClick={submitClaim}>
                CLAIM YOUR FREE MEALS
              </Button> */}
            </>
          )}
          {submitted && (
            <>
              <Header>
                <h3>
                  Hey {formData.name}, We will be sending your free meals in
                  August!
                </h3>
              </Header>
              <p style={{ textAlign: 'center' }}>
                We will be starting operations in August. You will receive a
                voucher on your email closer to the date. You will be able to
                claim your voucher on this website. See you soon and thank you!
              </p>
              <Button
                width='100%'
                onClick={() => {
                  modalClose();
                  mixpanel.track('See Menu');
                  scrollToViewButton('menu');
                }}
              >
                SEE THIS WEEKS MENU
              </Button>
            </>
          )}
        </Content>
      </ModalContainer>
    </Modal>
  );
};

export default ClaimModal;
