import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import {
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../../components';

export const CustomSizePerPageButton = ({
    options,
    currSizePerPage,
    onSizePerPageChange,
    ...ddProps
}) => (
    <UncontrolledButtonDropdown { ...ddProps }>
        <DropdownToggle size="sm" color="link" className="text-decoration-none">
            { currSizePerPage }<i className="fa fa-angle-down ml-2" />
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem header>Page Size</DropdownItem>
            {
                map(options, option => (
                    <DropdownItem
                        key={option.page}
                        onClick={() => onSizePerPageChange(option.page)}
                        active={option.page === currSizePerPage}
                    >
                        { option.text }
                    </DropdownItem>
                ))
            }
        </DropdownMenu>
    </UncontrolledButtonDropdown>
);

CustomSizePerPageButton.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Accepts both string and number
        text: PropTypes.string.isRequired
    })),
    currSizePerPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Updated to accept string as well
    onSizePerPageChange: PropTypes.func.isRequired
};
