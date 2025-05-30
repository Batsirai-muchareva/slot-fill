const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ...defaultConfig,
    entry: {
        frontend: path.resolve(__dirname, 'assets/frontend/frontend.ts'),
        admin: path.resolve(__dirname, 'assets/admin/admin.ts'),
    },
};
